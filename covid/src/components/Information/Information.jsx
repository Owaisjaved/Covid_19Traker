
import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import styless from './Information.module.css'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const redirectHandlerSym=()=>{
 let url ="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms";
 window.open(url, "_blank");
}

const redirectHandlerPre=()=>{
  let url ="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public";
  window.open(url, "_blank");
 }

 const redirectHandlerTre=()=>{
  let url ="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms";
  window.open(url, "_blank");
 }

export default function Information() {

  const classes = useStyles();
  
    return (
       
          
<div className={styless.container}>
   <Grid spacing={3} > 
<Card  className={styless.card1}>
      <CardContent className="Symptoms">
        <Typography className={classes.title} color="textPrimary" gutterBottom>
        <h3> Symptoms</h3>
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
        COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.
        </Typography>
        <Typography variant="body2" className="textstyle">
        <ul>Less Common Symptoms:
         
           <li>aches and pains</li>
           <li>
           sore throat
          </li>
           <li>
           diarrhoea</li>
           <li>
           conjuctivitis
          </li>
          <li>
           headache
          </li>
          <li>
           loss of taste and smell
          </li>
          <li>
           a rash on skin, or discolouration of fingers or toes
          </li>
           </ul>
           <hr />
           <ul>Most Common Symptoms:
         
           <li>fever</li>
           <li>
           dry cough
          </li>
           <li>
           tiredness</li>
           </ul>
           <hr />
           <ul>Serious Symptoms:
         
           <li>difficulty breathing or shortness of breath</li>
           <li>
           chest pain or pressure
          </li>
           <li>
           loss of speech or movement</li>
           </ul>
           <p>
           Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.<br/>
People with mild symptoms who are otherwise healthy should manage their symptoms at home.<br />
On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
           </p>

        </Typography>
      </CardContent>
      <Button onClick={redirectHandlerSym}>Click Me To Learn More </Button>
    </Card>
    <hr/>
    <Card className={styless.card2}>
      <CardContent className="preven">
        <Typography className={classes.title} color="textPrimary" gutterBottom>
       <h3>  Prevention</h3>
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
        Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.
        </Typography>
        <Typography variant="body2" >
        To prevent the spread of COVID-19:
        <ul>
          <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
          <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
          <li>Don’t touch your eyes, nose or mouth.</li>
          <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
          <li>Stay home if you feel unwell.</li>
          <li>If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.</li>
          <li>Follow the directions of your local health authority.</li>
        </ul>
        <p>Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively,<br/> therefore protecting you and others.</p>
        </Typography>
      </CardContent>
      <Button onClick={redirectHandlerPre}>Click Me To Learn More </Button>
    </Card>
    <hr/>
    <Card className={styless.card3}>
      <CardContent className="treat">
        <Typography variant="h3" className={classes.title} color="textPrimary" gutterBottom>
       <h3>  Treatments</h3>
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
        To date, there are no specific vaccines or medicines for COVID-19. Treatments are under investigation, and will be tested through clinical trials. World Health Organization
        </Typography>
        <Typography variant="body2">
         
        Self care<br/>
If you feel sick you should rest, drink plenty of fluid, and eat nutritious food. Stay in a separate room from other family members, and use a dedicated bathroom if possible.<br/> Clean and disinfect frequently touched surfaces.
Everyone should keep a healthy lifestyle at home. Maintain a healthy diet, sleep, stay active, and make social contact with loved ones through the phone or internet.<br/> Children need extra love and attention from adults during difficult times. Keep to regular routines and schedules as much as possible.<br/>
It is normal to feel sad, stressed, or confused during a crisis. Talking to people you trust, such as friends and family, can help. If you feel overwhelmed, talk to a health worker or counsellor.
        </Typography>
      </CardContent>
      <Button onClick={redirectHandlerTre}>Click Me To Learn More </Button>
    </Card>
    
   </Grid> 
      </div>
        
    )
}
