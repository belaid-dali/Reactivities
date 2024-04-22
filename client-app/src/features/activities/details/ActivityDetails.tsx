import React from "react";
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon } from "semantic-ui-react";

interface Props {
    activity: Activity
}

export default function ActivityDetails({activity}: Props){
    return(
        <Card>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <CardContent>
          <CardHeader>{activity.title}</CardHeader>
          <CardMeta>
            <span>{activity.date}</span>
          </CardMeta>
          <CardDescription>
            {activity.description}
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <ButtonGroup widths="2">
            <Button basic
          </ButtonGroup>
        </CardContent>
      </Card>
    )
}