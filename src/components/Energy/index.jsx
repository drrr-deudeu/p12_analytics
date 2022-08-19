import EnergyComponent from "../EnergyComponent"
function Energy() {
  return (
    <div className='energy'>
      <EnergyComponent
        label='calories'
        value='1,930kCal'
        icon='Calories.png'
        className='cal'
      />
      <EnergyComponent
        label='Proteines'
        value='155g'
        icon='Protein.png'
        className='prot'
      />
      <EnergyComponent
        label='Glucides'
        value='290g'
        icon='Glucides.png'
        className='gluc'
      />
      <EnergyComponent
        label='Lipides'
        value='50g'
        icon='LipidesFull.png'
        className='lipi'
      />
    </div>
  )
}
export default Energy
