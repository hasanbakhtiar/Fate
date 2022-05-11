let list = (
  <ol>
    <li style={{"color":"red"}}>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg" alt="" />
  </ol>
);

let temp = (
  <div>
    {list}
    {list}
    {list}
    {list}
  </div>
);

ReactDOM.render(temp, document.querySelector("#root"));
