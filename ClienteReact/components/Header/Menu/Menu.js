import React, {useState, useEffect} from 'react';
import { Container, Menu, Grid, Icon, Label} from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";
import { map } from "lodash";
import  useAuth  from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import { getMeApi } from "../../../api/user";
import { getCategoryApi } from "../../../api/category";

export default function MenuWeb() {
  
   

    

    
    return (
        <div className="menu">
           <Container>
               <Grid>
                   <Grid.Column className="menu__left" width={6}>
                        <MenuP />
                   </Grid.Column>
                   <Grid.Column className="menu__right" width={10}>
                        
               
                       
                   </Grid.Column>
               </Grid>
           </Container>
           
        </div>
    );
}

function MenuP(props) {
  
  
    return (
        <h1></h1>
    );
}

function MenuOptions(props) {
   
    return(
        <h1></h1>
    )
}