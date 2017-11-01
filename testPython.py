import pickle

x=pickle.dumps([99,100])

print(x)

pickle.loads(x)