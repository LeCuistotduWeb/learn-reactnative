import { StyleSheet, View } from "react-native"
import UIButton from '../components/ui/button';

const UIView = () => {
  return (
    <View style={styles.container}>
        <View style={styles.mb3}>
          <UIButton 
            onPress={()=> console.warn('test onPress default')} 
          >test default button
        </UIButton>
        </View>

        <View style={styles.mb3}>
          <UIButton 
            variant='success' 
            onPress={()=> console.warn('test onPress sucess')} 
            >test sucess button
          </UIButton>
        </View>

        <View style={styles.mb3}>
          <UIButton 
            variant='alert' 
            onPress={()=> console.warn('test onPress alert')} 
          >test alert button
        </UIButton>
        </View>

        <View style={styles.mb3}>
          <UIButton 
            variant='warning' 
            onPress={()=> console.warn('test onPress warning')} 
            >test warning button
          '</UIButton>
        </View>

        <View style={styles.mb3}>
          <UIButton 
            variant='info' 
            onPress={()=> console.warn('test onPress info')} 
            >test info button
          </UIButton>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  mb3: {
    marginBottom: 16,
  },
})

export default UIView;