function Button(props) {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
}

const element = (
  <div className="bg-container">
    <div className="text-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button buttonText="Like" className="like-button" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
