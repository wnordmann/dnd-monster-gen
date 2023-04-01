// StatBlock.jsx
import React, {useState} from 'react';
import './style.css';
import {formatAttributeStat, challangeRatingToXP} from './statBlockUtil';

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
                <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
            </div>
            <div class="top-stats">
                <div class="property-line first">
                    <h4>Armor Class:
                    </h4>
                    <span> {
                        stats.ac
                    }
                        ({
                        stats.armortype
                    })</span>
                </div>
                <div class="property-line">
                    <h4>Hit Points
                    </h4>
                    <span> {
                        stats.hp
                    }
                        ({
                        stats.hpcalculation
                    })</span>
                </div>
                <div class="property-line last">
                    <h4>Speed
                    </h4>
                    <span>{
                        stats.speed
                    }</span>
                </div>
                <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <div class="abilities">
                    <div class="ability-strength">
                        <h4>STR</h4>
                        <span>{
                            formatAttributeStat(stats.str)
                        }</span>
                    </div>
                    <div class="ability-dexterity">
                        <h4>DEX</h4>
                        <span>{
                            formatAttributeStat(stats.dex)
                        }</span>
                    </div>
                    <div class="ability-constitution">
                        <h4>CON</h4>
                        <span>{
                            formatAttributeStat(stats.con)
                        }</span>
                    </div>
                    <div class="ability-intelligence">
                        <h4>INT</h4>
                        <span>{
                            formatAttributeStat(stats.int)
                        }</span>
                    </div>
                    <div class="ability-wisdom">
                        <h4>WIS</h4>
                        <span>{
                            formatAttributeStat(stats.wis)
                        }</span>
                    </div>
                    <div class="ability-charisma">
                        <h4>CHA</h4>
                        <span>{
                            formatAttributeStat(stats.cha)
                        }</span>
                    </div>
                </div>
                <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <div class="property-line first">
                    <h4>Saving Throws:
                    </h4>
                    <span> {
                        stats.savingthrows
                    }</span>
                </div>
                <div class="property-line">
                    <h4>Damage Immunities:
                    </h4>
                    <span>{
                        stats.damageimmunities
                    }</span>
                </div>
                <div class="property-line">
                    <h4>Condition Immunities:
                    </h4>
                    <span>{
                        stats.conditionimmunities
                    }</span>
                </div>
                <div class="property-line">
                    <h4>Senses</h4>
                    <span> {
                        stats.senses
                    }</span>
                </div>
                <div class="property-line">
                    <h4>Skills
                    </h4>
                    <span> {
                        stats.skills
                    }</span>
                </div>
                <div class="property-line">
                    <h4>Languages
                    </h4>
                    <span>
                        &mdash; {
                        stats.languages ? "none" : stats.languages
                    }</span>
                </div>
                <div class="property-line last">
                    <h4>Challenge
                    </h4>
                    <span> {
                        stats.challengerating + " (" + challangeRatingToXP(stats.challengerating) + " XP)"
                    }</span>
                </div>
            </div>
            <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
            <div class="property-block">
                <h4>{
                    stats.property
                } </h4>
                <span>{
                    stats.propertydescription
                }</span>
            </div>
            <div class="actions">
                <h3>Actions</h3>
                <div class="property-block">
                    <span>{
                        stats.actions
                    }</span>
                </div>
            </div>
        </div>
    );
}

export default StatBlock;
