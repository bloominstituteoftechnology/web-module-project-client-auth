import Adidas from '../assets/adidas.png'
export default function Home() {

    return (
        <>
      <div className={"parallax-wrapper"}>
        <div className={"content"}>
          <h1>One brand...</h1>
        </div>
      </div>
      <div className={"regular-wrapper"}>
        <div className={"content"}>
          <h1>One Idea...</h1>
        </div>
      </div>
      <div className={"parallax-wrapper2"}>
        <div className={"content"}>
          <h1>One Shoe...</h1>
        </div>
      </div>
      <div className={"regular-wrapper2"}>
        <div className={"content"}>
          <h1>For whatever you do...</h1>
        </div>
      </div>
      <div className={"parallax-wrapper3"}>
        <div className={"content"}>
          <h1>One Choice...</h1>
        </div>
      </div>
      <div className={"regular-wrapper3"}>
        <div className={"content"}>
        <img
          src={Adidas}
          alt="adidas-logo"
          style={{ width: "300px", margin: "auto 1vw" }}
        />
        </div>
      </div>
      </>
    )
}