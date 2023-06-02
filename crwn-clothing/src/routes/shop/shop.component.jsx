import {Route, Routes} from "react-router-dom";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
// import {setCategories} from "../../store/categories/category.action";
import {setCategories} from "../../store/categories/category.reducer";
// import {fetchCategoriesAsync} from "../../store/categories/category.action";
import {fetchCategoriesStart} from "../../store/categories/category.action";
import {useDispatch} from "react-redux";


const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
            const getCategoriesMap = async () => {
                const categoriesArray = await getCategoriesAndDocuments("categories");
                dispatch(setCategories(categoriesArray));
            }
            getCategoriesMap();
        }, []
    )
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;