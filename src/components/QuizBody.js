import React from 'react';
import "./QuizBody.css"




function QuizBody() {
    return (
        <>
            <div class="card quiz-body">
                <form class="card-body">
                    <div className="question mb-5">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sequi, ut distinctio vitae reiciendis illum praesentium aut exercitationem
                        nihil culpa minima suscipit dolorem, maxime sed. Dolore libero voluptas veniam voluptatum
                        repudiandae!
                    </div>
                    <div className="options">
                        <div class="card mb-2">
                            <div class="card-body">
                                This is some text within a card body.
                                <input type="radio" />
                            </div>
                        </div>
                        <div class="card mb-2">
                            <div class="card-body">
                                This is some text within a card body.
                                <input type="radio" />
                            </div>
                        </div>
                        <div class="card mb-2">
                            <div class="card-body">
                                This is some text within a card body.
                                <input type="radio" />
                            </div>
                        </div>
                        <div class="card mb-2">
                            <div class="card-body">
                                This is some text within a card body.
                                <input type="radio" checked/>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="prev-next">
                    <button className="btn btn-primary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        </>
    )
}

export default QuizBody
