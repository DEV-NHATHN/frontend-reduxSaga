import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/apiReq.js";
import { getCatsStart } from '../../redux/saga/catSlice.js'
import "./header.css";
const Header = (props) => {
   const { setShowEdit, showEdit } = props;
   const dispatch = useDispatch()

   const user = useSelector(state => state.user)

   const handleShowEdit = () => {
      setShowEdit(!showEdit);
   }

   useEffect(() => {
      console.log('effect run');
      getUser(dispatch)
   }, [dispatch])

   // Saga
   const cats = useSelector(state => state.cats.cats)
   const [catsGallery, setCatsGallery] = useState(false)
   useEffect(() => {
      dispatch(getCatsStart())

   }, [dispatch])

   const handleShowCatsGallery = () => {
      setCatsGallery(!catsGallery)
   }

   return (
      <>
         <header style={{ backgroundColor: "#ff9051", backgroundImage: `linear-gradient(180deg, ${user.theme} 2%, ${user.theme}, 65%, #181818 100%)` }}>
            <div className="info-container">
               <div>
                  <img className="info-ava" src={user.url} alt="" />
                  <div className="info-username">{user.name}</div>
                  <div className="info-age">{user.age}</div>
                  <div className="info-about">{user.about}</div>
               </div>
               <div>
                  <div className="info-edit"
                     onClick={handleShowEdit}
                  >Edit</div>
                  <div className="info-edit"
                     onClick={handleShowCatsGallery}
                  >Cats</div>
               </div>

            </div>
         </header>
         {catsGallery && (
            <div
               className="Gallery"
               style={{ height: '62vh', overflowY: 'scroll' }}>
               {cats.map((cat, catidx) => {
                  return (
                     <div
                        key={catidx}
                        className="row"
                     >
                        <div className="column column-left">
                           <img
                              alt={cat.name}
                              src={cat.image.url}
                              width="100"
                              height="100"

                           />
                        </div>
                        <div className="column column-right"
                           style={{ color: 'black' }}>
                           <h2>{cat.name}</h2>
                           <h5>Temperament: {cat.temperament}</h5>

                        </div>
                     </div>
                  )
               })}
            </div>
         )}
      </>
   );
}

export default Header;