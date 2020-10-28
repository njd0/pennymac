import '../styles/Shows.css';

function Shows(props) {
  return (
    props.shows.map(({show}) => {
      return (
        <div key={show.id} className="show">
          <img src={show.image.medium} />
          <div className="info">
            <h3>{show.name}</h3>
            <div dangerouslySetInnerHTML={{__html: show.summary}}/>
          </div>
        </div>
      )
    })
  )
}

export default Shows;