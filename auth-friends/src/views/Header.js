import Adidas from '../assets/adidas.png'

export default function Header() {

    return (
        <div className={"wrapper"}>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div className={"frame"}></div>
        <div
          className={"content"}
          style={{
            opacity: "0.6",
            height: "300vh",
            display: "flex",
            paddingTop: "130vh",
            margin: "0 auto",
            textAlign: "center",
            zIndex: "1",
            background: 'transparent'
          }}
        >
          <img src={Adidas} alt='adidas-logo' style={{height: '350px', margin: '0 auto'}}/>
        </div>
      </div>
    )
}