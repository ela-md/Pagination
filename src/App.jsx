import ReactPaginate from 'react-paginate';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { useEffect, useState } from 'react';
import Comment from './components/Comment';
function App() {

  const [comments, setComments] = useState([])

  const handlePageChange = (data) => {
   let pageNumber = data.selected + 1
   fetchComments(pageNumber)
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

     <div>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
     </div>

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
