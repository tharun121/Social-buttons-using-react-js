const Button = (props) => {
  const { buttonName, className } = props;
  return <button className={`${className}`}>{buttonName}</button>;
};

const element = (
  <div className="bg_image">
    <div className="social_button_container">
      <h1 className="heading">Social Buttons</h1>

      <div className="buttons_container">
        <Button className="like_button" buttonName="Like" />
        <Button className="comment_button" buttonName="Comment" />
        <Button className="share_button" buttonName="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
