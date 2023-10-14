
function Home() {
    return (

        <div className="">
            <div class="text-center">
                <img src="https://i.postimg.cc/FFLwYrLT/download.jpg" className="rounded" alt="..."/>
                <h1>Available anywhere you need it</h1>
                <p>I made an extension and I want to share it with you. It's my first extension and it supports the maximum number of browsers that I know of. It's a normal extension and not very useful, but I made it because I was curious about how to make an extension.</p>
            </div>
            <div className="  mb-3 m-5 ">
                <img src='https://i.postimg.cc/D0vZyPW7/1.png' style={ { width: '18rem' } } className="card-img-top" alt="one" />
                <div className="card-body ">
                    <h5 className="card-title">Step 1</h5>
                    <ol className="card-text">
                        <li>      click on the extension button <button type="button" class="btn btn-primary "><a className="text-light" rel="noreferrer" href="https://github.com/shrey890/extension" target="_blank">Extension</a></button>
                        </li>
                        <li>Download Zip</li>
                        <li>Extract Zip File</li>
                    </ol>
                </div>
            </div>
            <div className=" m-5">
                <div className="card-body">
                    <h5 className="card-title">Step 2</h5>
                    <ol className="card-text">
                        <li>  Open Browser menu > Extension > Manage Extension
                        </li>
                        <li>Open Developer Mode</li>
                        <li>Click on Load UnPacked</li>
                    </ol>
                </div>
                <img src="https://i.postimg.cc/Qt806myY/2.png" style={ { width: '18rem' } } className="card-img-bottom" alt="..." />
            </div>
            <div className="  mb-3 m-5 ">
                <img src='https://i.postimg.cc/9QqLnrFT/3.png' style={ { width: '18rem' } } className="card-img-top" alt="one" />
                <div className="card-body ">
                    <h5 className="card-title">Step 3</h5>
                    <ol className="card-text">
                        <li>Select File extension-master</li>
                        <li>pin the extension</li>
                        <li>Enjoy....</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Home
