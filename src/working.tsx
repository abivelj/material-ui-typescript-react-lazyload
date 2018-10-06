import * as React from 'react';
import { Button, Theme, withStyles, WithStyles, createStyles } from "@material-ui/core";

export interface WorkingProps {
    text: string;
}

interface WorkingPropsInner extends WorkingProps, WithStyles<typeof styles> {

}

const styles = ({ palette }: Theme) => createStyles({
    buttonRed: {
        backgroundColor: palette.error.main
    }
});


class Working extends React.Component<WorkingPropsInner, any> {
    render() {
        return <div>
            <Button className={this.props.classes.buttonRed}>
                {this.props.text}
            </Button>
        </div>
    }
}

export default withStyles(styles)(Working);