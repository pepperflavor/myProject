import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
 
<View style={styles.container}>
  <Dialog
    visible={this.state.visible}
    footer={
      <DialogFooter>
        <DialogButton
          text="CANCEL"
          onPress={() => {}}
        />
        <DialogButton
          text="OK"
          onPress={() => {}}
        />
      </DialogFooter>
    }
  >
    <DialogContent>
    </DialogContent>
  </Dialog>
</View>