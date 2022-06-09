#include<bits/stdc++.h>
#include<unistd.h>
#define ll long long
using namespace std;
#define SIZE 20

char grid[SIZE][SIZE];
char ngrid[SIZE][SIZE];
void life(ll i, ll j){
    ll cnt = 0;
    if(0<i){
        if(grid[i-1][j]=='#'){
            cnt++;
        }
    }
    if(0<j){
        if(grid[i][j-1]=='#'){
            cnt++;
        }
    }
    if(i<SIZE-1){
        if(grid[i+1][j]=='#'){
            cnt++;
        }
    }
    if(j<SIZE-1){
        if(grid[i][j+1]=='#'){
            cnt++;
        }
    }
    if(0<i&&0<j){
        if(grid[i-1][j-1]=='#'){
            cnt++;
        }
    }
    if(i<SIZE-1&&j<SIZE-1){
        if(grid[i+1][j+1]=='#'){
            cnt++;
        }
    }
    if(0<i&&j<SIZE-1){
        if(grid[i-1][j+1]=='#'){
            cnt++;
        }
    }   
    if(i<SIZE-1&&0<j){
        if(grid[i+1][j-1]=='#'){
            cnt++;
        }
    }
    if(cnt==3){
        ngrid[i][j]='#';
        return;
    }
    if(cnt<2){
        ngrid[i][j]='.';
        return;
    }
    if(cnt>3){
        ngrid[i][j]='.';
        return;
    }
    ngrid[i][j]=grid[i][j];
    return;
}
signed main(){
    for(ll i = 0; i < SIZE; ++i){
        for(ll j = 0; j < SIZE; ++j){
            grid[i][j]='.';
        }
    }
    for(ll i = 5; i < 15; ++i){
        grid[10][i]='#';
    }
    while(true){
        system("clear");
        cout << "Ctrl+C to QUIT"<<endl;
        for(ll i = 0; i < SIZE; ++i){
            for(ll j = 0; j < SIZE; ++j){
                printf("%c",grid[i][j]);
            }
            printf("\n");
        }
        for(ll i = 0; i < SIZE; ++i){
            for(ll j = 0; j < SIZE; ++j){
                life(i,j);
            }
        }
        for(ll i = 0; i < SIZE; ++i){
            for(ll j = 0; j < SIZE; ++j){
                grid[i][j]=ngrid[i][j];
            }
        }
        sleep(1);
    }
}