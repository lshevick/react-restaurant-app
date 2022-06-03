import MenuItem from './MenuItem';

const MenuList = ({ DATA }) => {
    return <main>
        <div className="main-menu">
            <MenuItem DATA={DATA} />
        </div>
    </main>;
}

export default MenuList;