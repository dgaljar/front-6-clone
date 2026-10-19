function Work({title}){

    return (
    <div class="work">
              <div class="row align-items-center">
                <div class="col-md-4">
                  <img alt="Opis slike" src="https://placehold.co/246x180" />
                </div>
                <div class="col-md-8">
                  <h2>
                    <a href="/">{title}</a>
                  </h2>

                  <p class="meta">
                    <span class="year">2020</span>
                    <span class="tags">Dashboard</span>
                  </p>

                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
            );
}

export default Work;