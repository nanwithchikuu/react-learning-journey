import { useContext, useRef } from "react";
import { postListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(postListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split("  ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reaction, tags);
  };
  return (
    <form className="CratePost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Enter your user ID here
        </label>
        <input
          placeholder="Your user ID"
          ref={userIdElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Your Title
        </label>
        <input
          placeholder="How are you feeling today"
          ref={postTitleElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={3}
          placeholder="Tell us more about it"
          ref={postBodyElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Number of Reaction
        </label>
        <input
          placeholder="How many people reacted to this Post"
          ref={reactionElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter your Hastags Here
        </label>
        <input
          placeholder="please Enter your Tag using space"
          ref={tagsElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create-Post
      </button>
    </form>
  );
};

export default CreatePost;
