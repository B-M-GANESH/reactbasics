import './Header.css'
import Styles from './Header.module.css'
function Header(){
    const Style={
        color:"blue",
        backgroundColor:"yellow",
        paddingLeft:"30px"
    }
    return <>
    <h1 className={Styles.bigBlue}>Hello Style</h1>
    <p>Add to lists</p>
    </>
}
export default Header;