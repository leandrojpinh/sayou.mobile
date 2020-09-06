import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
  search: {
    backgroundColor: '#008BC9',
    padding: 18,
    paddingBottom: 5,
    paddingTop: 15
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  searhTitle: {
    fontFamily: 'Poppins_500Medium',
    color: '#FCFCFC',
    fontSize: 18
  },
  signalList: {
    marginTop: 20,
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
  item: {
    backgroundColor: '#FCFCFC',
    borderWidth: .5,
    borderColor: '#E1E2E3',
    borderRadius: 4,
    marginBottom: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 4
  },
  signal: {
    padding: 12,
    flex: 1
  },
  signalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  signalName: {
    fontFamily: 'Poppins_500Medium',
    color: '#3A4856',
    fontSize: 14
  },
  signalDescription: {
    fontFamily: 'Poppins_400Regular',
    color: '#3A4856',
    fontSize: 12,
    lineHeight: 18,
  }
});

export default styles;