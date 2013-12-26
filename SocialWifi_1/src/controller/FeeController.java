package controller;

import com.jfinal.core.Controller;

import entity.Fee;



public class FeeController extends Controller{

	public static int index=0;
	public void index(){
		System.out.println(getPara("date"));
		String date=getPara("date");
		if(index==0){
			Fee fee=new Fee();
			fee.setLast("200M");
			fee.setObtain("10M");
			fee.setRemain("60M");
			fee.setUsed("70M");
			renderJson(fee);
		}
		else {
			Fee fee=new Fee();
			fee.setLast("2330M");
			fee.setObtain("2220M");
			fee.setRemain("222M");
			fee.setUsed("20M");
			renderJson(fee);
		}
		index++;
		//renderText("heelll");
	}
}
