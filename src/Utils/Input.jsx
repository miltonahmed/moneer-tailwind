
const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  onChange

}) => {
  return (
   <input type={type} placeholder={placeholder} className={className} onChange={onChange}/>
  )
}

export default Input