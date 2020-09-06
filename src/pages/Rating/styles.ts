import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
  rating: {
    backgroundColor: '#008BC9',
    padding: 18,
    paddingBottom: 5,
    paddingTop: 15
  },
  ratingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  ratingTitle: {
    fontFamily: 'Poppins_500Medium',
    color: '#FCFCFC',
    fontSize: 18
  },
  new: {
    backgroundColor: '#008BC9',
    flex: 1,
    padding: 18,
    paddingTop: 4,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
  },
  viewed: {    
    flex: 1,
    padding: 18,
    paddingTop: 4,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    marginTop: 15
  },
  newTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#F5FAF9'
  },
  viewedTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#008BC9'
  },
  ratingItem: {
    flex: 1,
    flexDirection: 'row', 
    marginTop: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  classIcon: {
    height: 40,
    width: 40,
    marginLeft: 20
  },
  feedback: {    
    marginLeft: 10,
    flex: 1
  },
  newFeedbackText: {
    fontFamily: 'Poppins_400Regular',
    color: '#F5FAF9',
    fontSize: 12
  },
  feedbackTime: {
    fontFamily: 'Poppins_400Regular',
    color: '#B2B2B2',
    fontSize: 10
  },
  newUserText: {
    fontFamily: 'Poppins_500Medium',
    color: '#F5FAF9',
    fontSize: 14
  },
  viewedFeedbackText: {
    fontFamily: 'Poppins_400Regular',
    color: '#3A4856',
    fontSize: 12
  },
  viewedUserText: {
    fontFamily: 'Poppins_500Medium',
    color: '#3A4856',
    fontSize: 14
  },
});

export default styles;