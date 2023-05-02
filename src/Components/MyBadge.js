import { Badge } from 'react-bootstrap/';
import "..//Styles/myBadge.css"

const MyBadge = ({ str, color }) => {
    return (
        
        <Badge bg={color}>{str}</Badge>
    )
}

export default MyBadge;