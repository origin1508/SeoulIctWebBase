## 📝과제 - GAN 실습과제 활성화 함수를 바꿔서 실행해보기

GAN 실습을 진행했던 코드에서 활성화 함수로 LeakyReLu를 사용했었다. 이를 Softmax 함수로 바꿔서 GAN을 학습해 보았다.

### create_generator()

generator 생성자를 만드는 함수에서 기존 LeakyReLu 활성화 함수 부분을 주석처리 하고 Softmax 활성화 함수로 대체하였다.

```python
def create_generator():
    generator = Sequential()
    generator.add(Dense(units=256,input_dim=100))
    # generator.add(LeakyReLu(0.2))
    generator.add(Softmax())
    generator.add(Dense(units=512))
    # generator.add(LeakyReLu(0.2))
    generator.add(Softmax())
    generator.add(Dense(units=784, activation='tanh'))
    return generator
```

### create_discriminator()

마찬가지로 discriminator 판별자 생성 함수도 Softmax 활성화 함수로 대체하였다.

```python
def create_discriminator():
    discriminator = Sequential()
    discriminator.add(Dense(units=512,input_dim=784))
    # discriminator.add(LeakyReLu(0.2))
    discriminator.add(Softmax())
    discriminator.add(Dense(units=256))
    # discriminator.add(LeakyReLu(0.2))
    discriminator.add(Softmax())
    discriminator.add(Dense(units=1, activation='sigmoid'))
    discriminator.compile(loss='binary_crossentropy', optimizer=Adam(learning_rate=0.0002, beta_1=0.5))
    return discriminator
```

### 학습

바꾼 모델을 학습을 실시하였다. epochs가 10000번이라 41분이나 소요되었다. 그 결과 다음과 같은 이미지를 얻게 되었다.

![결과](C:\Users\biglight\Desktop\Projects\nipa-ict-web\8주차\0904\결과.png)