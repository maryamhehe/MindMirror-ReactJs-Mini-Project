import React from 'react'

export default function Banner() {
  return (
        <section className="row justify-content-center align-items-center mb-4 w-100 banner">
      <div className="col-md-6 text-center">
        <h1 className="fw-bold">Hey there, <br />How are you feeling today?</h1>
        <p className="text-muted">You can share anything.<br />I'm here to listen and support.</p>
      </div>
      <div className="col-md-4 text-center">
        <img src="/images/girl-help.png" alt="Supportive person" className="img-fluid rounded"/>
      </div>
    </section>
  )
}

