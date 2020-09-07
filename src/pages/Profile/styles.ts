import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
  profile: {
    backgroundColor: '#008BC9',
    padding: 18,
    paddingBottom: 5,
    paddingTop: 15
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  profileTitle: {
    fontFamily: 'Poppins_500Medium',
    color: '#FCFCFC',
    fontSize: 18
  },
  user: {
    flex: 1,
    backgroundColor: '#008BC9',
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 70
  },
  username: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 24,
    color: '#F5FAF9',
    marginTop: 10
  },
  profileType: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#3A4856'
  },
  dashboard: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 18,
    justifyContent: 'space-between'
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#E1E2E3',
    borderWidth: .5,
    borderRadius: 8,
    marginLeft: 18,    
  },
  dashboardText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12
  },
  dashboardValue: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 36
  }
});

export default styles;