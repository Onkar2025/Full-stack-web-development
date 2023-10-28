import "./price.css";
import Input from "../../component/input";
function price({handleChange}) {
  return (
  <>
   <div className="ml">
    <h2 className="sidebar-title-peicetitle">Price</h2>
   </div>
   <div>
   <label  className="sidebar-label-container">
    <input onChange={handleChange} type="radio"  value= "" name="test"/>
  <span className="checkmark"></span>
  </label>
   <Input handleChange={handleChange} 
  value={50}
  title = "0- 50" 
  name ="test2"
  />
  <Input handleChange={handleChange} 
  value={100}
  title = "50- 100" 
  name ="test2"
  />
  <Input handleChange={handleChange} 
  value={150}
  title = "100- 150" 
  name ="test2"
  />
  <Input handleChange={handleChange} 
  value={200}
  title = "150- 200" 
  name ="test2"
  />
   </div>
  </>
  );
}
export default  price ;