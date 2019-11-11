import React from "react"
import * as styles from './pageStyles/menu.module.css';
import Tabs from '../components/Tabs/Tabs';
import WineItem from '../components/WineItem/WineItem';
import MenuItemList from '../components/MenuItemList/MenuItemList';


const menu = ( {data} ) => {

    console.log(data)
    return (
    <div className={styles.Container}>
        <h2 className={styles.Header}>Menu</h2>
        <Tabs>
            <div label={"Drikkevarer"}>
                <p>Gode drikkevarer</p>
            </div>
            <div label={"Vin"}>
                {/* {data.red.nodes.length !== 0 && 
                    <MenuItemList 
                        header={"RØD"}
                    >
                        {data.red.nodes[0].wines.map(item => {
                            return (
                                <WineItem 
                                    header={item.name && item.name}
                                    description={item.description && item.description}
                                    glassPrice={item.glassprice && item.glassprice}
                                    bottlePrice={item.bottleprice && item.bottleprice}
                                />
                            )
                        })}
                    </MenuItemList>
                }
                {data.white.nodes.length !== 0 && 
                    <MenuItemList 
                        header={"HVID"}
                    >
                        {data.white.nodes[0].wines.map(item => {
                            return (
                                <WineItem 
                                    header={item.name && item.name}
                                    description={item.description && item.description}
                                    glassPrice={item.glassprice && item.glassprice}
                                    bottlePrice={item.bottleprice && item.bottleprice}
                                />
                            )
                        })}
                    </MenuItemList>
                }
                {data.other.nodes.length !== 0 && 
                    <MenuItemList 
                        header={"ANDET"}
                    >
                        {data.other.nodes[0].wines.map(item => {
                            return (
                                <WineItem 
                                    header={item.name && item.name}
                                    description={item.description && item.description}
                                    glassPrice={item.glassprice && item.glassprice}
                                    bottlePrice={item.bottleprice && item.bottleprice}
                                />
                            )
                        })} */}
                    {/* </MenuItemList> */}
                }
            </div>
        </Tabs>
    </div>)
};

// export const redWineQuery = graphql`
//     query redWineQueryery {
//         red: allFilesYaml(filter: {wines: {elemMatch: {winetype: {eq: "redwines"}}}}, sort: {fields: wines___bottleprice, order: ASC}) {
//             nodes {
//               wines {
//                 bottleprice
//                 description
//                 glassprice
//                 name
//                 winetype
//               }
//             }
//           }
//           white: allFilesYaml(filter: {wines: {elemMatch: {winetype: {eq: "whitewines"}}}}, sort: {fields: wines___bottleprice, order: ASC}) {
//             nodes {
//               wines {
//                 bottleprice
//                 description
//                 glassprice
//                 name
//                 winetype
//               }
//             }
//           }
//           other: allFilesYaml(filter: {wines: {elemMatch: {winetype: {eq: "otherwines"}}}}, sort: {fields: wines___bottleprice, order: ASC}) {
//             nodes {
//               wines {
//                 bottleprice
//                 description
//                 glassprice
//                 name
//                 winetype
//               }
//             }
//           }
//     }`




export default menu;