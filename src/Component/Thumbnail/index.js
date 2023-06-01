import './index.css'

const Thumbnail = props => {
  const {imageItem, changeImage} = props
  const {thumbnailUrl, id} = imageItem

  const sendBackId = () => changeImage(id)

  return (
    <li className="thumbnail">
      <button className="thumbnail-btn" type="button" onClick={sendBackId}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
