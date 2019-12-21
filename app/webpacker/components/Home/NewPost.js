import React from 'react'

const NewPost = (props) => {
  let formFields = {}

  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-2 pb-2">Add a New Post: </h2>

            <form onSubmit={(event) => {
              props.handleFormSubmit(
                formFields.title.value,
                formFields.description.value,
                formFields.url.value
              );
              event.target.reset();
            }}>
              <div className="pt-3 pb-3">
                <input className="pl-2" ref={input => formFields.title = input} placeholder='Enter the title' />
              </div>
              <div className="pt-3 pb-3">
                <input className="pl-2" ref={input => formFields.description = input} placeholder='Enter a description' />
              </div>
              <div className="pt-3 pb-3">
                <input className="pl-2" ref={input => formFields.url = input} placeholder='Enter a video link' />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost