type Props = {}

function GridBox({}: Props) {
  return (
    <div className="box">
        <div className="card-content">
            <div className="card-image"><i className="fa-duotone fa-apartment"></i></div>
            <div className="card-info-wrapper">
                <div className="card-info">
                    <i className="fa-duotone fa-apartment"></i>
                    <div className="card-info-title">
                        <h3>Apartments</h3>  
                        <h4>Places to be apart. Wait, what?</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GridBox;