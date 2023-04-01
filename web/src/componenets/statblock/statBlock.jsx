// StatBlock.jsx
import React, {useState} from 'react';
import './style.css';
import {formatAttributeStat, challangeRatingToXP} from './statBlockUtil';
import Actions from '../actions/actions';
import Properties from '../properties/properties';
import SplitLine from '../splitLine/splitLine';
function StatBlock(props) {
    const stats = props.stats;
    return (
        <div className="stat-block wide">
            <hr className="orange-border"/>
            <div className="section-left">
                <div className="creature-heading">
                    <h1>{
                        stats.name
                    }</h1>
                    <h2>{
                        stats.size
                    }
                        {" "}
                        {
                        stats.type
                    }
                        {" "}
                        {
                        stats.alignment
                    }</h2>
                </div>
            </div>
            <SplitLine/>
            <div className='description'>
                {
                props.description
            } </div>
            <SplitLine/>
            <div className="top-stats">
                <div className="property-line first">
                    <h4>Armor Class:
                    </h4>
                    <span> {
                        stats.ac
                    }
                        ({
                        stats.armorType
                    })</span>
                </div>
                <div className="property-line">
                    <h4>Hit Points
                    </h4>
                    <span> {
                        stats.hp
                    }
                        ({
                        stats.hpCalculation
                    })</span>
                </div>
                <div className="property-line last">
                    <h4>Speed
                    </h4>
                    <span>{
                        stats.speed
                    }</span>
                </div>
                <SplitLine/>
                <div className="abilities">
                    <div className="ability-strength">
                        <h4>STR</h4>
                        <span>{
                            formatAttributeStat(stats.str)
                        }</span>
                    </div>
                    <div className="ability-dexterity">
                        <h4>DEX</h4>
                        <span>{
                            formatAttributeStat(stats.dex)
                        }</span>
                    </div>
                    <div className="ability-constitution">
                        <h4>CON</h4>
                        <span>{
                            formatAttributeStat(stats.con)
                        }</span>
                    </div>
                    <div className="ability-intelligence">
                        <h4>INT</h4>
                        <span>{
                            formatAttributeStat(stats.int)
                        }</span>
                    </div>
                    <div className="ability-wisdom">
                        <h4>WIS</h4>
                        <span>{
                            formatAttributeStat(stats.wis)
                        }</span>
                    </div>
                    <div className="ability-charisma">
                        <h4>CHA</h4>
                        <span>{
                            formatAttributeStat(stats.cha)
                        }</span>
                    </div>
                </div>
                <SplitLine/>
                <div className="property-line first">
                    <h4>Saving Throws:
                    </h4>
                    <span> {
                        stats.savingThrows
                    }</span>
                </div>
                <div className="property-line">
                    <h4>Damage Immunities:
                    </h4>
                    <span>{
                        stats.damageImmunities
                    }</span>
                </div>
                <div className="property-line">
                    <h4>Condition Immunities:
                    </h4>
                    <span>{
                        stats.conditionImmunities
                    }</span>
                </div>
                <div className="property-line">
                    <h4>Senses</h4>
                    <span> {
                        stats.senses
                    }</span>
                </div>
                <div className="property-line">
                    <h4>Skills
                    </h4>
                    <span> {
                        stats.skills
                    }</span>
                </div>
                <div className="property-line">
                    <h4>Languages
                    </h4>
                    <span>
                        &mdash; {
                        stats.languages ? "none" : stats.languages
                    }</span>
                </div>
                <div className="property-line last">
                    <h4>Challenge
                    </h4>
                    <span> {
                        stats.challengeRating + " " + challangeRatingToXP(stats.challengeRating)
                    }</span>
                </div>
            </div>
            <SplitLine/>
            <div className="property-block">
                <div className="properties">
                    <Properties properties={
                        stats.properties
                    }/>
                    <div className="property-block"></div>
                </div>
            </div>
            <div className="actions">
                <h3>Actions :</h3>
                <Actions actions={
                    stats.actions
                }/>
                <div className="property-block"></div>
            </div>
        </div>
    );
}

export default StatBlock;
