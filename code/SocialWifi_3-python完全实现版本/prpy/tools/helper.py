#coding=utf-8


def CallBack(msg):
	return {'success':True,'msg':msg}

OK= {'success':True,'msg':'OK'}

def ErrCallBack(msg='Error'):
	return {'success':False,'msg':msg}

