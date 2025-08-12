import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },

  blocoA: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  blocoB: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  blocoC: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  area: {
    width: 195,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },

  texto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
});
