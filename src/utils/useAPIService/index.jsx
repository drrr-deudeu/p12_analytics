import { UserInfos } from "../../dataModel/UserInfos/index.jsx"
import { UserActivity } from "../../dataModel/UserActivity/index.jsx"
import { UserAverageSessions } from "../../dataModel/UserAverageSessions/index.jsx"
import { UserPerformance } from "../../dataModel/UserPerformance/index.jsx"
import { useState, useEffect } from "react"
import axios from "axios"
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../datas/data.js"

export function useAPIService(userId, isMockData) {
  const [user, setUser] = useState({})
  const [activity, setActivity] = useState({})
  const [averageSessions, setAverageSessions] = useState({})
  const [performance, setPerformance] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    const instance = axios.create({
      baseURL: "http://localhost:3000/user",
      timeout: 2000,
    })

    if (isMockData) {
      const id = parseInt(userId)

      let filter = USER_MAIN_DATA.filter((d) => d.id === id)
      if (filter.length) {
        setUser(new UserInfos(filter[0]))
        setActivity(
          new UserActivity(USER_ACTIVITY.filter((d) => d.userId === id)[0])
        )
        setAverageSessions(
          new UserAverageSessions(
            USER_AVERAGE_SESSIONS.filter((d) => d.userId === id)[0]
          )
        )
        setPerformance(
          new UserPerformance(
            USER_PERFORMANCE.filter((d) => d.userId === id)[0]
          )
        )
        return
      }
    }
    if (isLoading) return
    setLoading(true)
    instance
      .get(userId)
      .then((res) => {
        setUser(new UserInfos(res.data.data))
        instance.get(userId + "/activity").then((res) => {
          setActivity(new UserActivity(res.data.data))
        })
        instance.get(userId + "/average-sessions").then((res) => {
          setAverageSessions(new UserAverageSessions(res.data.data))
        })
        instance.get(userId + "/performance").then((res) => {
          setPerformance(new UserPerformance(res.data.data))
        })
      })
      .catch((err) => {
        // setUser(new UserInfos(USER_MAIN_DATA[0]))
        // setActivity(new UserActivity(USER_ACTIVITY[0]))
        // setAverageSessions(new UserAverageSessions(USER_AVERAGE_SESSIONS[0]))
        // setPerformance(new UserPerformance(USER_PERFORMANCE[0]))
        setErrMsg(err.message)
        setError(true)
      })
    setLoading(false)
  }, [userId, isLoading, isMockData, error])

  return {
    user,
    activity,
    averageSessions,
    performance,
    isLoading,
    error,
    errMsg,
  }
}
