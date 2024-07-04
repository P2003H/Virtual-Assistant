#include<bits/stdc++.h>
using namespace std;
class Stack{
    public:
    int*arr;
    int top;
    int size;
    Stack(int size){
        this->size=size;
        arr=new int[size];
        top=-1;

    }
    void push(int element){
        if(size-top>=0){
           top++;
           arr[top]=element;
        }
        else{
            cout<<"Stack overflow"<<endl;
        }

    }

    void pop(){
        if(top>-1){
            top--;
        }
        else{
            cout<<"Stack underflow"<<endl;
        }
        
    }

    int peek(){
        if(top==-1){
            cout<<"Stack is empty"<<endl;
            return -1;
        }
        else{
            cout<<"top element is"<<arr[top]<<endl;
            return arr[top];
        }
    }

    bool isempty(){
         if(top==-1){
            cout<<"Stack is empty"<<endl;
        }
        else{ cout<<"Stack is not empty"<<endl;
        return false;
        }
    }
};

int main(){
   Stack st(5);
    st.push(1);
     st.push(2);
    st.push(3);
    st.push(4);
    st.push(5);
     st.pop();
      st.peek();
     st.isempty();
    /*stack<int>s;
    
    //push operation

    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);

    //pop operation

    s.pop();

    // top operation

    cout<<"top element is"<<s.top();

    //empty operation 

   if( s.empty())
   cout<<"Stack is empty "<<endl;
   else
   cout<<"Stack is not  empty "<<endl;
   */
} 