
const Menu = () => {
  return <main>
      <div className="main-menu">
        <div className="sub-menu appetiezers">
          <h2>Appetizers</h2>
          <ul>
            <li>
              <p>
                <button className='add-item'>+</button>
                Gyoza</p>
              <span>$4.00</span>
            </li>

            <li>
              <p>
                <button className='add-item'>+</button>
                Crab Rangoon</p>
              <span>$3.50</span>
            </li>

            <li>
              <p>
                <button className='add-item'>+</button>
                Shumai</p>
              <span>$2.50</span>
            </li>

            <li>
              <p>
                <button className='add-item'>+</button>
                Edamame</p>
              <span>$2.00</span>
            </li>
          </ul>
        </div>

        <div className="sub-menu sushi">
          <h2>Sushi</h2>
          <ul>
            <li>
              <p>
                <button className='add-item'>+</button>
                California Roll</p>
              <span>$5.00</span>
            </li>

            <li>
              <p>
                <button className='add-item'>+</button>
                Alaska Roll</p>
              <span>$5.00</span>
            </li>

            <li>
              <p>
                <button className='add-item'>+</button>
                Spider Roll</p>
              <span>$9.00</span>
            </li>

            <li>
              <p>
                <button className='add-item'>+</button>
                Dragon Roll</p>
              <span>$8.50</span>
            </li>

          </ul>
        </div>

        <div className=" sub-menu desserts">
          <h2>Desserts</h2>
          <ul>
            <li>
              <p>
                <button className='add-item'>+</button>
                Strawberry Mochi</p>
              <span>$2.50</span>
            </li>

            <li>
              <p>
                <button className='add-item'>+</button>
                Pocky</p>
              <span>$1.00</span>
            </li>
          </ul>
        </div>
      </div>
    </main>;
}
  
export default Menu;