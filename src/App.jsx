import ReactPaginate from 'react-paginate';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { useEffect, useState } from 'react';
function App() {

  const [comments, setComments] = useState([])

  const handlePageChange = (data) => {
   const pageNumber = data.selected + 1
  }

  const fetchComments = (pageNumber) => {
   fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}`)
    .then(response => response.json())
    .then(comments => setComments(comments))
    
  }

  useEffect(()=> {
      fetchComments(1)
  }, [])

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

        onPageChange={handlePageChange}

   
   />
      
   </div>
  )
}

export default App
