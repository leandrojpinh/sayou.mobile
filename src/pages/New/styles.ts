import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
  new: {
    backgroundColor: '#008BC9',
    padding: 18,
    paddingBottom: 5,
    paddingTop: 15
  },
  newHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  newTitle: {
    fontFamily: 'Poppins_500Medium',
    color: '#FCFCFC',
    fontSize: 18
  },
  textSend: {
    fontFamily: 'Poppins_400Regular',
    color: '#FCFCFC',
    fontSize: 14
  },  
  input: {
    height: 50,
    backgroundColor: '#FCFCFC',
    borderRadius: 25,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#B2B2B2'
  },
  textarea: {
    backgroundColor: '#FCFCFC',
    borderRadius: 25,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    marginTop: 4,
    marginBottom: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#B2B2B2'
  },
  data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#3A4856',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 25
  },
  textButton: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: '#FCFCFC'
  }
});

export default styles;