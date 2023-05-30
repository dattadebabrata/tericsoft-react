import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles';
import {useNavigate} from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category;
    const navigate=useNavigate();
    const onNavigateHandler=()=>{
        navigate(`/shop/${title}`);
    }
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;