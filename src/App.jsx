import ReactPaginate from 'react-paginate';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
function App() {
 

  return (
   <div className="App">

   <ReactPaginate

        pageCount={50}
        breakLabel="..."
        nextLabel="next >"
        previousLabel='< previous'
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        nextClassName='page-item'
        previousClassName='page-item'

        pageLinkClassName='page-link'
        nextLinkClassName='page-link'
        previousLinkClassName='page-link'

        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeLinkClassName='active'

   
   />
      
   </div>
  )
}

export default App
