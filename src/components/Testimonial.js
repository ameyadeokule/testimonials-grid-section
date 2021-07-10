const getNameCss = (bgcolor) => {
  if (bgcolor === 'violet' || bgcolor === 'gray' || bgcolor === 'blue') {
    return 't-name t-white'
  }
  else {
    return 't-name t-blue'
  }
}
const getTitleCss = (bgcolor) => {
  if (bgcolor === 'violet' || bgcolor === 'gray' || bgcolor === 'blue') {
    return 't-title t-white t-op50'
  }
  else {
    return 't-title t-blue t-op50'
  }
}

const getAfterCss = (bgcolor) => {
  if (bgcolor === 'violet' || bgcolor === 'gray') {
    return 't-h2 t-white'
  }
  else if (bgcolor === 'blue') {
    return 't-h2 t-light-gray'
  }
  else {
    return 't-h2 t-blue'
  }
}
const getBeforeCss = (bgcolor) => {
  if (bgcolor === 'violet' || bgcolor === 'gray' || bgcolor === 'blue') {
    return 't-body t-white t-op70'
  }
  else {
    return 't-body t-blue t-op70'
  }
}

export default function Testimonial({ testimonial }) {
  
  return (
    <div className={`testimonial testimonial--${testimonial.bgcolor} testimonial--${testimonial.id}`}>
      <div className="testimonial__profile">
        <div className={`testimonial__profile__avatar testimonial__profile__avatar--${testimonial.bgcolor}`}>
          <img src={require(`../assets/image-${testimonial.avatar}.jpg`).default} alt={`${testimonial.avatar} avatar`}/>
        </div>
        <h3 className={`testimonial__profile__name ${getNameCss(testimonial.bgcolor)}`}>{testimonial.name}</h3>
        <p className={`testimonial__profile__title ${getTitleCss(testimonial.bgcolor)}`}>Verified Graduate</p>
      </div>
      <h2 className={`testimonial__after ${getAfterCss(testimonial.bgcolor)}`}>{testimonial.after}</h2>
      <p className={`testimonial__before ${getBeforeCss(testimonial.bgcolor)}`}>{testimonial.before}</p>
    </div>
  )
}
