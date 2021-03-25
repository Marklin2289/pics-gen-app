import React from "react";

// const ImageCard = ({ image }) => {
//   const [spans, setSpans] = useState(0);
//   const imageRef = createRef();
//   console.log(imageRef);
//   useEffect(() => {
//     imageRef.addEventListener("load", () => {
//       const height = imageRef.current.clientHeight;
//       const spans = Math.ceil(height / 10);
//       setSpans(spans);
//     });
//   }, []);
//   return (
//     <div>
//       <img
//         ref={imageRef}
//         src={image.urls.regular}
//         alt={image.alt_description}
//       />
//     </div>
//   );
// };

// export default ImageCard;

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
