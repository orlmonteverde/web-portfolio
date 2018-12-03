const SkillChip = ({ img, label, color='#ccc' }) => (
  <div style={{backgroundColor: color}}>
    <div>
      <img src={img} alt='Avatar'/>
    </div>
    <div>
      <p>{label}</p>
    </div>
  </div>
)

export default SkillChip
