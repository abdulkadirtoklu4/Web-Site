print("***Information*** \n This calculator @abdulkadirtoklu4's. In this calculator, you can also perform mode import and exponential operations other than normal calculators.")
print("Bu hesap makinesinde normal hesap makineleri dışında mod alma ve üs alma işlemlerini de yapabilirsiniz.")

sayi1 = int(input("1st issue:"))
sayi2 = int(input("2nd issue"))
islem = input("Select an Action (+,-,*,/,%,**")

if islem=="+":
    sonuc=sayi1+sayi2
    print(sonuc)

elif islem=="-":
    sonuc=sayi1-sayi2
    print(sonuc)

elif islem=="*":
    sonuc=sayi1*sayi2
    print(sonuc)

elif islem=="/":
    sonuc=sayi1/sayi2
    print(sonuc)

elif islem=="%":
    sonuc=sayi1%sayi2
    print(sonuc)

elif islem=="**":
    sonuc=sayi1**sayi2
    print(sonuc)

else:
    print("You have pressed the wrong key, please restart the program. \n Yanlış tuşa bastınız, lütfen programı yeniden başlatınız.")