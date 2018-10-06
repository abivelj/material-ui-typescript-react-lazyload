import * as React from 'react';
import { Button, Theme, withStyles, WithStyles, createStyles } from "@material-ui/core";

export interface NotWorkingProps extends WithStyles<typeof styles> {
    text: string;
}

const styles = ({ palette }: Theme) => createStyles({
    buttonRed: {
        backgroundColor: palette.error.main
    }
});


class NotWorking extends React.Component<NotWorkingProps, any> {
    render() {
        return <div>
            <Button className={this.props.classes.buttonRed}>
                {this.props.text}
            </Button>
        </div>
    }
}

export default withStyles(styles)(NotWorking);