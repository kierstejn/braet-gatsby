import React from "react"
import * as styles from './pageStyles/menu.module.css';
import Tabs from '../components/Tabs/Tabs';
import WineItem from '../components/WineItem/WineItem';
import MenuItemList from '../components/MenuItemList/MenuItemList';


const menu = ( props ) => (
    <div className={styles.Container}>
        <h2 className={styles.Header}>Menu</h2>
        <Tabs>
            <div label={"Drikkevarer"}>
                <p>Gode drikkevarer</p>
            </div>
            <div label={"Vin"}>
                <MenuItemList 
                    header={"RØD"}
                >
                    <WineItem 
                        header={"Cabernet sauvignon"}
                        description={"God vin med masser af fylde fddfdf fdfddfdf fddffdfd fddffdd fdfddfdf dffdfddf dffddffd dffddfdf dffddffd dfdfdf "}
                        glassPrice={92}
                        bottlePrice={200}
                    />
                    <WineItem 
                        header={"Cabernet sauvignon"}
                        description={"God vin med masser af fylde"}
                        glassPrice={92}
                    />
                </MenuItemList>
            </div>
        </Tabs>
    </div>
);

export default menu;